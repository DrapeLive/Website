import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders structured data as a JSON-LD script tag.
 * Keep the payload factual — no invented reviews, ratings or addresses.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
