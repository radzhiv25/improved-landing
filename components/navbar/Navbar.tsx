"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Search, Share2, Heart, ChevronDown, X, Menu, Copy, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navItems, isGroupedNavItem, type NavItem, type NavSubItem } from "@/data/nav-data";

const iconButtonClass =
  "flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-primary-foreground transition-all duration-200 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95";

function NavIconButton({
  "aria-label": ariaLabel,
  tooltip,
  children,
  onClick,
  className = "",
}: {
  "aria-label": string;
  tooltip: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div className="group/tooltip relative">
      <button
        type="button"
        onClick={onClick}
        className={`${iconButtonClass} ${className}`}
        aria-label={ariaLabel}
        title={tooltip}
      >
        {children}
      </button>
      <span
        className="pointer-events-none absolute left-1/2 bottom-full z-[100] mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-primary-foreground px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/tooltip:opacity-100"
        role="tooltip"
      >
        {tooltip}
      </span>
    </div>
  );
}

function SubItemLink({ sub }: { sub: NavSubItem }) {
  return (
    <Link
      href={sub.href}
      className="group block rounded-md px-3 py-2.5 text-left transition-colors duration-150 hover:bg-primary/5"
    >
      <span className="flex items-center gap-2 font-medium text-primary-foreground group-hover:text-primary">
        {sub.label}
        {sub.badge && (
          <span className="rounded bg-primary/15 px-1.5 py-0.5 text-xs font-medium text-primary">
            {sub.badge}
          </span>
        )}
      </span>
      {sub.description && (
        <p className="mt-0.5 text-xs leading-snug text-neutral-500">{sub.description}</p>
      )}
    </Link>
  );
}

function NavDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  const isGrouped = isGroupedNavItem(item);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onMouseEnter={onOpen}
        onClick={() => (isOpen ? onClose() : onOpen())}
        className="flex items-center gap-1 rounded-md px-2 py-2 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute left-0 top-full pt-1 transition-[opacity,transform] duration-200 ${
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div
          onMouseLeave={onClose}
          className={`rounded-lg border border-neutral-200 bg-white shadow-lg ${
            isGrouped ? "flex gap-8 p-4" : "min-w-[280px] py-2"
          }`}
        >
          {isGrouped ? (
            <>
              {item.subGroups.map((group) => (
                <div key={group.heading} className="min-w-[280px]">
                  <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
                    {group.heading}
                  </p>
                  <div className="space-y-0.5">
                    {group.items.map((sub) => (
                      <SubItemLink key={sub.label} sub={sub} />
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="mb-1 px-3 pt-1 text-xs font-medium uppercase tracking-wide text-neutral-400">
                {item.label}
              </p>
              {item.subItems.map((sub) => (
                <SubItemLink key={sub.label} sub={sub} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const closeSearch = () => {
    setSearchQuery("");
    setSearchOpen(false);
  };

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (searchOpen || shareOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, shareOpen]);

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShareOpen(false);
      }, 1200);
    });
  };

  const handleShareWhatsApp = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = encodeURIComponent(url);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
    setShareOpen(false);
  };

  useEffect(() => {
    if (!searchOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && closeSearch();
    document.addEventListener("keydown", onEscape);
    requestAnimationFrame(() => searchInputRef.current?.focus());
    return () => document.removeEventListener("keydown", onEscape);
  }, [searchOpen]);

  useEffect(() => {
    if (!shareOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && setShareOpen(false);
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [shareOpen]);

  return (
    <>
      <nav className="flex h-14 w-full items-center justify-center px-4 md:px-6">
        <div className="mx-auto flex w-full min-w-0 items-center justify-between gap-6 sm:w-[75%] sm:max-w-[75vw]">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            <Logo className="h-8 w-32 md:h-9 md:w-36" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavDropdown
                key={item.label}
                item={item}
                isOpen={openDropdown === item.label}
                onOpen={() => setOpenDropdown(item.label)}
                onClose={() => setOpenDropdown(null)}
              />
            ))}
          </div>

          {/* Right: icon buttons + CTA */}
          <div className="flex items-center gap-2">
            <NavIconButton
              aria-label="Search"
              tooltip="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </NavIconButton>
            <NavIconButton
              aria-label="Copy link or share on WhatsApp"
              tooltip="Copy link or share on WhatsApp"
              className="hidden sm:flex"
              onClick={() => setShareOpen(true)}
            >
              <Share2 className="h-5 w-5" />
            </NavIconButton>
            <NavIconButton aria-label="Wishlist" tooltip="Wishlist">
              <Heart className="h-5 w-5" />
            </NavIconButton>
            <Link
              href="#"
              className="ml-1 hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-[0.98] sm:inline-flex"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg lg:hidden ${mobileOpen ? "bg-primary text-white" : "bg-neutral-100 text-primary-foreground"} transition-colors duration-200`}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Search modal */}
      <div
        className={`fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 transition-[opacity] duration-300 ease-out ${
          searchOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!searchOpen}
        aria-modal="true"
        role="dialog"
        aria-label="Search"
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out"
          onClick={closeSearch}
        />
        <div
          className={`relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-xl transition-[transform,opacity] duration-300 ease-out ${
            searchOpen ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3">
            <Search className="h-5 w-5 shrink-0 text-neutral-400" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for Developers, Locations, or Projects..."
              className="min-w-0 flex-1 bg-transparent text-primary-foreground placeholder:text-neutral-400 focus:outline-none"
              aria-label="Search for developers, locations, or projects"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={closeSearch}
              className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              aria-label="Close search and clear"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="px-4 pt-2 pb-1 text-xs text-neutral-500">
            Type at least 3 characters to search
          </p>
          <div className="min-h-[200px] px-4 pb-6">
            {/* Results placeholder - empty until search */}
          </div>
        </div>
      </div>

      {/* Share dialog */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-[opacity] duration-300 ease-out ${
          shareOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!shareOpen}
        aria-modal="true"
        role="dialog"
        aria-label="Share"
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out"
          onClick={() => setShareOpen(false)}
        />
        <div
          className={`relative w-full max-w-sm overflow-hidden rounded-2xl bg-white p-4 shadow-xl transition-[transform,opacity] duration-300 ease-out ${
            shareOpen ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-primary-foreground">Share</h3>
            <button
              type="button"
              onClick={() => setShareOpen(false)}
              className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              aria-label="Close share dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-primary-foreground transition-colors hover:bg-neutral-100"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                <Copy className="h-4 w-4" />
              </span>
              {copied ? "Copied!" : "Copy link"}
            </button>
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-primary-foreground transition-colors hover:bg-neutral-100"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                <MessageCircle className="h-4 w-4" />
              </span>
              Share on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[90vw] overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-lg bg-primary px-4 py-3 text-center font-medium text-white transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const isGrouped = isGroupedNavItem(item);

  return (
    <div className="border-b border-neutral-100">
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-primary-foreground"
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="pb-2 pl-3">
            {isGrouped ? (
              item.subGroups.map((group) => (
                <div key={group.heading} className="mb-3">
                  <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-400">
                    {group.heading}
                  </p>
                  <div className="space-y-1">
                    {group.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={onNavigate}
                        className="flex items-center gap-2 py-2 text-sm text-neutral-600 hover:text-primary"
                      >
                        {sub.label}
                        {sub.badge && (
                          <span className="rounded bg-primary/15 px-1.5 py-0.5 text-xs font-medium text-primary">
                            {sub.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              item.subItems.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  onClick={onNavigate}
                  className="block py-2 text-sm text-neutral-600 hover:text-primary"
                >
                  {sub.label}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
