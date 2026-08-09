import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const normalizedId = sectionId.replace(/^#/, '');
  const element = document.getElementById(normalizedId);

  if (element) {
    const offset = 96;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    if (window.history && window.location) {
      const nextHash = `#${normalizedId}`;
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', nextHash);
      }
    }

    return;
  }

  if (normalizedId === 'resume') {
    window.location.assign('/resume');
  }
}
