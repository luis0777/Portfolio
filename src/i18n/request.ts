import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Ler o idioma salvo no cookie
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "pt";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
