import React from "react";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-gray-900" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <IconChevronRight
                  size={14}
                  aria-hidden="true"
                  className="text-gray-400"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
