import type { Metadata } from "next"

const title = "Noah Nesslauer – Lebenslauf"
const description =
  "Lebenslauf von Noah Nesslauer: Werdegang, Projekte, Kenntnisse und Zertifikate."

export const metadata: Metadata = {
  metadataBase: new URL("https://nesslauer.smiit.de"),
  title,
  description,
  alternates: {
    canonical: "/de/",
    languages: {
      de: "/de/",
      en: "/en/",
      "x-default": "/de/",
    },
  },
  robots: { index: false, follow: true },
}

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/de/" />
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/de/');",
        }}
      />
    </>
  )
}
