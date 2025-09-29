export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: false positive
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
