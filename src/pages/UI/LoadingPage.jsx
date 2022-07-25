import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'

var bgColor = '#1F2937';
// var bgColor2 = '#4F46E5';

export const LoadingPage = ({ title }) => {
    return (
        <div className='text-white grid place-content-center h-100 vh-100 mt-20'>
            {/* <DoubleBubble text={text} bgColor={bgColor} center={false} width={"220px"} height={"220px"} speed={5} /> */}
            <HalfMalf justify-center text={title} bgColor={bgColor} center={false} width={"200px"} height={"200px"} speed={5} />
        </div>
    )
}


