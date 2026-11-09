import React, {useState, useContext} from "react";
import "./ReadingShelf.scss";
import {readingShelf} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function ReadingShelf() {
  const {isDark} = useContext(StyleContext);
  const [filter, setFilter] = useState("all");
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (!readingShelf || !readingShelf.display) {
    return null;
  }

  const currentlyReadingCount = readingShelf.books.filter(
    (b) => b.status === "Currently Reading"
  ).length;

  const readCount = readingShelf.books.filter(
    (b) => b.status === "Read"
  ).length;

  const filteredBooks = readingShelf.books.filter((book) => {
    if (filter === "reading") return book.status === "Currently Reading";
    if (filter === "read") return book.status === "Read";
    return true;
  });

  return (
    <div className={`reading-shelf-section main ${isDark ? "dark-mode" : ""}`} id="reading-shelf">
      <div className="section-header-center">
        <div className="section-eyebrow">READING &amp; INSPIRATION</div>
        <h1 className="reading-heading">{readingShelf.title || "Goodreads Bookshelf"}</h1>
        {readingShelf.subtitle && (
          <p className={isDark ? "dark-mode reading-subtitle" : "reading-subtitle"}>
            {readingShelf.subtitle}
          </p>
        )}
      </div>

      <div className="reading-shelf-card">
        {/* Header inside card */}
        <div className="reading-shelf-header">
          <div className="shelf-header-left">
            <a
              href={readingShelf.goodreadsProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="goodreads-brand-pill"
              title="Open Goodreads Profile"
            >
              <i className="fab fa-goodreads-g"></i>
              <span>goodreads</span>
            </a>
            <div className="shelf-title-group">
              <h3 className="shelf-title">Curated Reading List</h3>
              <span className="shelf-meta">
                {readingShelf.totalBooks} books logged • {currentlyReadingCount} in progress
              </span>
            </div>
          </div>

          <div className="shelf-header-right">
            {/* Filter Pills */}
            <div className="shelf-filters">
              <button
                type="button"
                className={`filter-btn ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All ({readingShelf.books.length})
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === "reading" ? "active" : ""}`}
                onClick={() => setFilter("reading")}
              >
                <span className="reading-dot"></span>
                Reading ({currentlyReadingCount})
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === "read" ? "active" : ""}`}
                onClick={() => setFilter("read")}
              >
                Read ({readCount})
              </button>
            </div>

            <a
              href={readingShelf.goodreadsProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="view-goodreads-btn"
            >
              <span>Full Shelf</span>
              <i className="fas fa-arrow-up-right-from-square"></i>
            </a>

            <button
              type="button"
              className="shelf-collapse-btn"
              onClick={() => setIsCollapsed(!isCollapsed)}
              title={isCollapsed ? "Expand Bookshelf" : "Collapse Bookshelf"}
            >
              <i className={`fas fa-chevron-${isCollapsed ? "down" : "up"}`}></i>
            </button>
          </div>
        </div>

        {/* Book Grid / Row */}
        {!isCollapsed && (
          <div className="books-grid">
            {filteredBooks.map((book, idx) => (
              <a
                key={idx}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="book-item"
                title={`${book.title} by ${book.author}`}
              >
                <div className="book-cover-wrapper">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="book-cover-img"
                    loading="lazy"
                  />
                  <span
                    className={`book-status-badge ${
                      book.status === "Currently Reading" ? "is-reading" : "is-read"
                    }`}
                  >
                    {book.status === "Currently Reading" ? (
                      <>
                        <span className="live-dot" />
                        <span>Reading</span>
                      </>
                    ) : (
                      <span>Read</span>
                    )}
                  </span>
                </div>

                <div className="book-details">
                  <h4 className="book-title">{book.title}</h4>
                  <p className="book-author">{book.author}</p>
                  {book.shelf && <span className="book-shelf-tag">{book.shelf}</span>}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
