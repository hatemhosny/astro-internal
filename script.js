var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
export function renderAstroComponent(component) {
    var component_1, component_1_1;
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        let template = '';
        try {
            for (component_1 = __asyncValues(component); component_1_1 = yield component_1.next(), !component_1_1.done;) {
                const value = component_1_1.value;
                if (value || value === 0) {
                    template += value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (component_1_1 && !component_1_1.done && (_a = component_1.return)) yield _a.call(component_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return template;
    });
}
export function renderToString(result, componentFactory, props, children = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const Component = yield componentFactory(result, props, children);
        let template = yield renderAstroComponent(Component);
        return template;
    });
}
export function renderPage(result, Component, props, children) {
    return __awaiter(this, void 0, void 0, function* () {
        const template = yield renderToString(result, Component, props, children);
        const styles = Array.from(result.styles).map(style => renderElement('style', style));
        const scripts = Array.from(result.scripts).map(script => renderElement('script', script));
        return template.replace("</head>", styles.join('\n') + scripts.join('\n') + "</head>");
    });
}
function renderElement(name, { props: _props, children = '' }) {
    const { hoist: _, "data-astro-id": astroId, "define:vars": defineVars } = _props, props = __rest(_props, ["hoist", "data-astro-id", "define:vars"]);
    if (defineVars) {
        if (name === 'style') {
            children = defineStyleVars(astroId, defineVars) + '\n' + children;
        }
        if (name === 'script') {
            children = defineScriptVars(defineVars) + '\n' + children;
        }
    }
    return `<${name}${spreadAttributes(props)}>${children}</${name}>`;
}
import { valueToEstree } from 'estree-util-value-to-estree';
import * as astring from 'astring';
const { generate, GENERATOR } = astring;
// A more robust version alternative to `JSON.stringify` that can handle most values
// see https://github.com/remcohaszing/estree-util-value-to-estree#readme
const customGenerator = Object.assign(Object.assign({}, GENERATOR), { Literal(node, state) {
        if (node.raw != null) {
            // escape closing script tags in strings so browsers wouldn't interpret them as
            // closing the actual end tag in HTML
            state.write(node.raw.replace('</script>', '<\\/script>'));
        }
        else {
            GENERATOR.Literal(node, state);
        }
    } });
const serialize = (value) => generate(valueToEstree(value), {
    generator: customGenerator,
});
function _render(child) {
    return __awaiter(this, void 0, void 0, function* () {
        child = yield child;
        if (Array.isArray(child)) {
            return (yield Promise.all(child.map(value => _render(value)))).join('\n');
        }
        else if (typeof child === 'function') {
            // Special: If a child is a function, call it automatically.
            // This lets you do {() => ...} without the extra boilerplate
            // of wrapping it in a function and calling it.
            return yield child();
        }
        else if (typeof child === 'string') {
            return child;
        }
        else if (!child && child !== 0) {
            // do nothing, safe to ignore falsey values.
        }
        else if (child instanceof AstroComponent) {
            return yield renderAstroComponent(child);
        }
        else {
            return child;
        }
    });
}
export class AstroComponent {
    constructor(htmlParts, expressions) {
        this.htmlParts = htmlParts;
        this.expressions = expressions;
    }
    *[Symbol.iterator]() {
        const { htmlParts, expressions } = this;
        for (let i = 0; i < htmlParts.length; i++) {
            const html = htmlParts[i];
            const expression = expressions[i];
            yield _render(html);
            yield _render(expression);
        }
    }
}
export function render(htmlParts, ...expressions) {
    return new AstroComponent(htmlParts, expressions);
}
export const createComponent = (cb) => {
    // Add a flag to this callback to mark it as an Astro component
    cb.isAstroComponentFactory = true;
    return cb;
};
function extractHydrationDirectives(inputProps) {
    let props = {};
    let hydrationDirective = null;
    for (const [key, value] of Object.entries(inputProps)) {
        if (key.startsWith('client:')) {
            hydrationDirective = [key.split(':')[1], value];
        }
        else {
            props[key] = value;
        }
    }
    return { hydrationDirective, props };
}
/** For hydrated components, generate a <script type="module"> to load the component */
function generateHydrateScript(scriptOptions, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
        const { renderer, astroId, props } = scriptOptions;
        const { hydrate, componentUrl, componentExport } = metadata;
        if (!componentExport) {
            throw new Error(`Unable to resolve a componentExport for "${metadata.displayName}"! Please open an issue.`);
        }
        let hydrationSource = '';
        if (renderer.hydrationPolyfills) {
            hydrationSource += `await Promise.all([${renderer.hydrationPolyfills.map((src) => `\n  import("${src}")`).join(', ')}]);\n`;
        }
        hydrationSource += renderer.source
            ? `const [{ ${componentExport.value}: Component }, { default: hydrate }] = await Promise.all([import("${componentUrl}"), import("${renderer.source}")]);
  return (el, children) => hydrate(el)(Component, ${serialize(props)}, children);
`
            : `await import("${componentUrl}");
  return () => {};
`;
        const hydrationScript = `<script type="module">
import setup from 'astro/client/${hydrate}.js';
setup("${astroId}", {${metadata.hydrateArgs ? `value: ${JSON.stringify(metadata.hydrateArgs)}` : ''}}, async () => {
  ${hydrationSource}
});
</script>
`;
        return hydrationScript;
    });
}
export const renderSlot = (result, slotted, fallback) => __awaiter(void 0, void 0, void 0, function* () {
    if (slotted) {
        return _render(slotted);
    }
    return fallback;
});
export const renderComponent = (result, displayName, Component, _props, children) => __awaiter(void 0, void 0, void 0, function* () {
    Component = yield Component;
    // children = await renderGenerator(children);
    if (Component && Component.isAstroComponentFactory) {
        const output = yield renderToString(result, Component, _props, children);
        return output;
    }
    // const { renderers } = result._metadata;
    // let metadata: AstroComponentMetadata = { displayName };
    // if (Component == null) {
    //   throw new Error(`Unable to render ${metadata.displayName} because it is ${Component}!\nDid you forget to import the component or is it possible there is a typo?`);
    // }
    // // else if (typeof Component === 'string' && !isCustomElementTag(Component)) {
    // //   throw new Error(`Astro is unable to render ${metadata.displayName}!\nIs there a renderer to handle this type of component defined in your Astro config?`);
    // // }
    // const { hydrationDirective, props } = extractHydrationDirectives(_props);
    // let html = '';
    // if (!hydrationDirective) {
    //   return '<pre>Not implemented</pre>';
    // }
    // metadata.hydrate = hydrationDirective[0] as AstroComponentMetadata['hydrate'];
    // metadata.hydrateArgs = hydrationDirective[1];
    // for (const [url, exported] of Object.entries(result._metadata.importedModules)) {
    //   for (const [key, value] of Object.entries(exported as any)) {
    //     if (Component === value) {
    //       metadata.componentExport = { value: key };
    //       metadata.componentUrl = url;
    //       break;
    //     }
    //   }
    // }
    // let renderer = null;
    // for (const r of renderers) {
    //   if (await r.ssr.check(Component, props, null)) {
    //     renderer = r;
    //   }
    // }
    // ({ html } = await renderer.ssr.renderToStaticMarkup(Component, props, null));
    // const astroId = shorthash.unique(html);
    // result.scripts.add(await generateHydrateScript({ renderer, astroId, props }, metadata as Required<AstroComponentMetadata>));
    // return `<astro-root uid="${astroId}">${html}</astro-root>`;
});
export const addAttribute = (value, key) => {
    if (value == null || value === false) {
        return '';
    }
    return ` ${key}="${value}"`;
};
export const spreadAttributes = (values) => {
    let output = '';
    for (const [key, value] of Object.entries(values)) {
        output += addAttribute(value, key);
    }
    return output;
};
export const defineStyleVars = (astroId, vars) => {
    let output = '\n';
    for (const [key, value] of Object.entries(vars)) {
        output += `  --${key}: ${value};\n`;
    }
    return `.${astroId} {${output}}`;
};
export const defineScriptVars = (vars) => {
    let output = '';
    for (const [key, value] of Object.entries(vars)) {
        output += `let ${key} = ${JSON.stringify(value)};\n`;
    }
    return output;
};
