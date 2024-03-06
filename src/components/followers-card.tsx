import useFetch from "../libs/hooks/useFetch"
import ScrollArea from "./scroll-area"

const FollowersCard = () => {
    const followers = useFetch({ url: 'https://api.github.com/users/ISongwuts/followers' })
    console.log(followers)
    return (
        <div className="xl:col-span-4 max-xl:col-span-10 border-2 shadow-md p-5 flex flex-col justify-center">
            <span className="text-2xl font-bold">My Followers</span>
            {followers && <ScrollArea>
                <ul className="flex flex-col gap-3">
                    {
                        followers.map((follow: any, index: number) => (
                            <li key={index} className="flex justify-between items-center gap-3">
                                <div className="flex items-center gap-3 border hover:border-black p-4 w-full">
                                    <img className="w-[50px]" src={follow.avatar_url} alt="" />
                                    <span className="lg:text-xl min-[0px]:text-sm">{follow.login}</span>
                                </div>
                                <a href={follow.html_url} target="_blank" rel="noopener noreferrer"><button className="py-4 px-8 border rounded-md bg-green-200 hover:bg-green-300">Look</button></a>
                            </li>
                        ))
                    }
                </ul>
            </ScrollArea>}
        </div>
    )
}

export default FollowersCard