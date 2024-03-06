import useFetch from "../libs/hooks/useFetch"
import ScrollArea from "./scroll-area"

const ReposCard = () => {
    const repos = useFetch({ url: 'https://api.github.com/users/ISongwuts/repos' })
    return (
        <div className="xl:col-span-4 min-[0px]:col-span-10 border-2 shadow-md p-5 flex flex-col justify-center">
            <span className="text-2xl font-bold">My Repository</span>
            {repos && <ScrollArea>
                <ul className="flex flex-col gap-3">
                    {
                        repos.map((repo: any, index: number) => (
                            <li key={index} className="flex justify-between items-center gap-3">
                                <div className="flex items-center gap-3 border hover:border-black p-4 w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M92.8 145.6a8 8 0 1 1-9.6 12.8l-32-24a8 8 0 0 1 0-12.8l32-24a8 8 0 0 1 9.6 12.8L69.33 128Zm58.89-71.4l-32 112a8 8 0 1 1-15.38-4.4l32-112a8 8 0 0 1 15.38 4.4m53.11 60.2l-32 24a8 8 0 0 1-9.6-12.8l23.47-17.6l-23.47-17.6a8 8 0 1 1 9.6-12.8l32 24a8 8 0 0 1 0 12.8" /></svg>
                                    <span className="text-xl">{repo.name}</span>
                                    {index == 0 && <span className="p-3 border rounded-md bg-yellow-100">Newest!</span>}
                                </div>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><button className="py-4 px-8 border rounded-md bg-green-200 hover:bg-green-300">Visit</button></a>
                            </li>
                        ))
                    }
                </ul>
            </ScrollArea>}
        </div>
    )
}

export default ReposCard