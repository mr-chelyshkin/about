/** Two-digit ordinal for list positions: 0 becomes "01". */
export const padIndex = (index: number) => String(index + 1).padStart(2, '0')
