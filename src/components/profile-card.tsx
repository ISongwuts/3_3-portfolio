import ProfileImage from '../assets/img/profile.png'
import { profileData } from '../data/profile-card-info'
import useFetch from '../libs/hooks/useFetch'


const ProfileCard = () => {
  const githubInfo = useFetch({ url: 'https://api.github.com/users/ISongwuts' })
  return (
    <div className='col-span-3 max-[1250px]:col-span-10 border-2 shadow-md p-5 flex flex-col justify-center items-center'>
      <img className='rounded-full w-[25%]' src={ProfileImage} alt="Profile Image" />
      <div className='text-center flex flex-col gap-4'>
        <span className='text-3xl font-bold'>{profileData.name}</span>
        <p><i>{profileData.email}</i></p>
        <q className='text-lg'>{profileData.description}</q>
        {githubInfo &&
          <ul className='flex gap-6 justify-center'>
            {
              profileData.keyInfo.map((key: string, index: number) => (
                <li key={index} className='flex flex-col gap-2 p-3 border rounded-md hover:border-2 hover:border-black'>
                  <span className='text-xl'>{githubInfo[key.toLowerCase()]}</span>
                  <span>{key}</span>
                </li>
              ))
            }

          </ul>}
      </div>
    </div>
  )
}

export default ProfileCard