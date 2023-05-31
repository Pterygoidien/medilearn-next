import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import Showcase from "./components/home/showcase"
import Browse from "./components/home/browse"

export default async function Home({
    params: {
        lang
    }
}:
{
    params: {
        lang: Locale
    }

}) {
    const dictionary = await getDictionary(lang)

    return (
        <main>
            <Showcase />
            <Browse />

        </main>
    )
}
