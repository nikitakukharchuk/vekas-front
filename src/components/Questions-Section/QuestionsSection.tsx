import {QuestionListAPI} from "@/Mocs/QuestionListAPI";
import {QuestionType} from "@/types/QuestionType";

const QuestionsSection = () => {
    return (
        <section className='px-10'>
            <div className='green-custom xl:text-3xl md:text-2xl'>We’re always here to help</div>
            <div className='xl:text-5xl md:text-4xl xl:pt-8 md:pt-5 xl:pb-20 md:pb-14'>Frequently Asked Question</div>
            <div className='grid w-full'>
                {QuestionListAPI.map(({id,question,answer}:QuestionType) => (
                    <div key={id} className='question-item xl:p-4 md:p-3 mb-5 xl:rounded-s md:rounded-md'>
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-base">
                                <span>{question}</span>
                                <span className="group-open:rotate-180 group-open:-translate-x-5 green-custom">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M 15 6 L 21 12 m 0 0 l -6 6 M 21 12 H -13" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-3">
                                {answer}
                            </p>
                        </details>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default QuestionsSection