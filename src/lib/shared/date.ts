import { tz } from "@date-fns/tz";
import { format, isValid, parseISO } from "date-fns";
import { DISPLAY_TIME_ZONE } from "$lib/constants";

const SHORT_DATE_FORMAT = "MMM d, yyyy";
const DISPLAY_TZ = tz(DISPLAY_TIME_ZONE);

function formatDate(value: string | undefined, pattern = SHORT_DATE_FORMAT) {
  if (!value) {
    return null;
  }

  const date = parseISO(value);

  if (!isValid(date)) {
    return null;
  }

  return format(date, pattern, { in: DISPLAY_TZ });
}

export { formatDate };
