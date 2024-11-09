import { marked } from 'marked';

export default () => {
    const x = { __html: marked.parse(`# Fresh project

Your new Fresh project is ready to go. You can follow the Fresh "Getting
Started" guide here: https://fresh.deno.dev/docs/getting-started

### Usage
            `) as string };
    return <div>
        <div class="h-6"></div>
        <div class="text-center text-4xl text-red-600">hello world!</div>
        <div>I need some help!</div>
        <div dangerouslySetInnerHTML={x}/>
    </div>
}