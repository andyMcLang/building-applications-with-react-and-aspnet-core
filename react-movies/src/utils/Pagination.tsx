import { useEffect, useState } from "react";

export default function Pagination({
  currentPage,
  totalAmountOfPages,
  radio = 3,
  onChange,
}: paginationProps) {
  const [linkModels, setLinkModels] = useState<linkModel[]>([]);

  function selectPage(link: linkModel) {
    if (link.page === currentPage) return;
    if (!link.enabled) return;
    onChange(link.page);
  }

  function getClass(link: linkModel) {
    if (link.active) return "active pointer";
    if (!link.enabled) return "disabled";
    return "pointer";
  }

  useEffect(() => {
    const previousPageEnabled = currentPage !== 1;
    const previousPage = currentPage - 1;
    const links: linkModel[] = [];

    links.push({
      text: "Edellinen",
      enabled: previousPageEnabled,
      page: previousPage,
      active: false,
    });

    for (let i = 1; i <= totalAmountOfPages; i++) {
      if (i >= currentPage - radio && i <= currentPage + radio) {
        links.push({
          text: `${i}`,
          active: currentPage === i,
          enabled: true,
          page: i,
        });
      }
    }

    const nextPageEnabled =
      currentPage !== totalAmountOfPages && totalAmountOfPages > 0;
    const nextPage = currentPage + 1;

    links.push({
      text: "Seuraava",
      page: nextPage,
      enabled: nextPageEnabled,
      active: false,
    });

    setLinkModels(links);
  }, [currentPage, totalAmountOfPages, radio]);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {linkModels.map((link) => (
          <li
            key={link.text}
            onClick={() => selectPage(link)}
            className={`page-item ${getClass(link)}`}
            style={{ cursor: link.enabled ? "pointer" : "default" }}
          >
            <span className="page-link">{link.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface linkModel {
  page: number;
  enabled: boolean;
  text: string;
  active: boolean;
}

interface paginationProps {
  currentPage: number;
  totalAmountOfPages: number;
  radio?: number; // radio on valinnainen, koska sille annetaan oletusarvo
  onChange(page: number): void;
}
