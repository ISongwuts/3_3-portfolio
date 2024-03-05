import { stepperData } from "../data/about-me"

const HistoryStepper = () => {
    return (
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
            {
                stepperData.map((data, index: number) => (
                    <li key={index} className="mb-10 ms-6">
                        <span className={`absolute flex items-center justify-center w-8 h-8 ${index == 0 ? 'bg-green-200' : 'bg-slate-200'} rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900`}>
                            {index + 1}
                        </span>
                        <h3 className="font-medium text-lg leading-tight">{data.school}</h3>
                        <p className="text-sm">{data.gpax}</p>
                    </li>
                ))
            }
        </ol>

    )
}

export default HistoryStepper