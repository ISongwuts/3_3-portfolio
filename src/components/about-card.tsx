import ScrollArea from './scroll-area'
import HistoryStepper from './history-stepper'
import { aboutMe } from '../data/about-me'


const AboutCard = () => {
    return (
        <div className='col-span-6 grid grid-cols-3 border-2 text-center shadow-md p-5 gap-5'>
            <div className='col-span-2 flex flex-col gap-5 p-5 border'>
                <span className='text-2xl font-bold'>About Me <i>XD</i></span>
                <ScrollArea>
                    <div className='flex flex-wrap gap-3'>
                        {
                            Object.keys(aboutMe).map((key: string, index: number) => (
                                <div key={index} className='flex gap-3 items-center p-5 border hover:border-black'>
                                    <span>{key.toUpperCase()}:</span>
                                    <span className={`p-2 ${ aboutMe[key].length > 10 ? 'bg-slate-100' : 'bg-yellow-100'} bg-slate-100 rounded-md`}>{aboutMe[key]}</span>
                                </div>
                            ))
                        }
                    </div>
                    </ScrollArea>
            </div>
            <div className='col-span-1 flex flex-col gap-5 p-5 border hover:border-black'>
                <span className='text-2xl font-bold'>My Graduate <i>UwU</i></span>
                <ScrollArea>
                    <HistoryStepper />
                </ScrollArea>
            </div>
            <i className='col-span-3 text-center'><q>Both can scroll!!!! {'>_<'}</q></i>
        </div>
    )
}

export default AboutCard