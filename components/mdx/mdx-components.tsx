import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Callout } from "./callout";

export const mdxComponents: MDXComponents = {
  Callout,
  img: (props) => (
    <Image
      {...(props as { src: string; alt: string })}
      width={800}
      height={450}
      className="my-4 rounded-lg"
    />
  ),
  h2: (props) => (
    <h2 className="mt-10 mb-4 text-2xl font-bold" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold" {...props} />
  ),
  code: (props) => (
    <code
      className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm"
      {...props}
    />
  ),
  ol: (props) => <ol className="my-4 list-decimal pl-6 space-y-2" {...props} />,
  ul: (props) => <ul className="my-4 list-disc pl-6 space-y-2" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-gray-300 pl-4 italic text-gray-600"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border border-gray-300 bg-gray-50 px-3 py-2 text-left font-semibold" {...props} />
  ),
  td: (props) => (
    <td className="border border-gray-300 px-3 py-2" {...props} />
  ),
};
