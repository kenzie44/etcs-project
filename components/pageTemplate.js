import Head from "next/head";

export default function PageTemplate(props) {
    return (
        <div className="min-h-screen flex flex-col">
        <Head>
          <title>{props.title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {props.children}
        </div>
    )
}