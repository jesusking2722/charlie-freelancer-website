export function getMonthName(monthIndex: number): string {
  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error("Month index must be between 0 and 11");
  }

  const date = new Date(2000, monthIndex);
  return date.toLocaleString("default", { month: "long" });
}
