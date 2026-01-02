/**
 * Parse various date formats and return a Date object
 * Supports formats like:
 * - "March 5-6, 2026"
 * - "January 15-16, 2026"
 * - "December 28, 2026"
 * - "EXTRU 2024" (will be treated as past)
 */
export function parseEventDate(dateString: string): { startDate: Date | null; endDate: Date | null } {
  if (!dateString) return { startDate: null, endDate: null };

  // Check if it's a special case like "EXTRU 2024" (no specific date)
  if (!dateString.match(/\d{1,2}/)) {
    // Check if there's a year
    const yearMatch = dateString.match(/\d{4}/);
    if (yearMatch) {
      const year = parseInt(yearMatch[0]);
      return {
        startDate: new Date(year, 0, 1),
        endDate: new Date(year, 11, 31)
      };
    }
    return { startDate: null, endDate: null };
  }

  try {
    // Match patterns like "Month DD-DD, YYYY" or "Month DD, YYYY"
    const rangePattern = /([A-Za-z]+)\s+(\d{1,2})-(\d{1,2}),\s+(\d{4})/;
    const singlePattern = /([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})/;

    const rangeMatch = dateString.match(rangePattern);
    if (rangeMatch) {
      const [, month, startDay, endDay, year] = rangeMatch;
      const monthIndex = getMonthIndex(month);
      return {
        startDate: new Date(parseInt(year), monthIndex, parseInt(startDay)),
        endDate: new Date(parseInt(year), monthIndex, parseInt(endDay))
      };
    }

    const singleMatch = dateString.match(singlePattern);
    if (singleMatch) {
      const [, month, day, year] = singleMatch;
      const monthIndex = getMonthIndex(month);
      const date = new Date(parseInt(year), monthIndex, parseInt(day));
      return {
        startDate: date,
        endDate: date
      };
    }

    return { startDate: null, endDate: null };
  } catch (error) {
    console.error('Error parsing date:', dateString, error);
    return { startDate: null, endDate: null };
  }
}

/**
 * Get month index from month name
 */
function getMonthIndex(monthName: string): number {
  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];
  return months.indexOf(monthName.toLowerCase());
}

/**
 * Calculate event status based on dates
 * Returns: 'upcoming' | 'ongoing' | 'completed'
 */
export function getEventStatus(dateString: string): 'upcoming' | 'ongoing' | 'completed' {
  const { startDate, endDate } = parseEventDate(dateString);
  
  if (!startDate || !endDate) {
    // If we can't parse the date, return upcoming by default
    return 'upcoming';
  }

  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999); // Set to end of day

  if (now < start) {
    return 'upcoming';
  } else if (now >= start && now <= end) {
    return 'ongoing';
  } else {
    return 'completed';
  }
}

/**
 * Get status badge color classes
 */
export function getStatusBadgeClasses(status: 'upcoming' | 'ongoing' | 'completed'): string {
  switch (status) {
    case 'upcoming':
      return 'bg-accent/90 border-accent text-white shadow-accent/50';
    case 'ongoing':
      return 'bg-green-500/90 border-green-400 text-white shadow-green-500/50';
    case 'completed':
      return 'bg-gray-600/90 border-gray-500 text-gray-200 shadow-gray-600/50';
    default:
      return 'bg-accent/90 border-accent text-white shadow-accent/50';
  }
}
