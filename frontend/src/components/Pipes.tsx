import Pipe from "@/components/Pipe";
import PipeEdge from "@/components/PipeEdge";

const Pipes = () => {
    return <div className='relative w-full flex justify-end absolute z-10 left-[0px] top-0'>
        <div className='relative w-full'>
            <Pipe classNameContainer='absolute right-0 top-0'/>
            <Pipe classNameContainer='absolute right-[250px] top-0'/>
            <PipeEdge classNameContainer='absolute right-[500px] top-[75px]'/>
            <Pipe classNameContainer='absolute right-[425px] top-[175px] -rotate-90' flipHorizontal/>
            <Pipe classNameContainer='absolute right-[425px] top-[425px] -rotate-90' flipHorizontal/>
            <PipeEdge classNameContainer='absolute right-[500px] top-[663px] rotate-180'/>
            <Pipe classNameContainer='absolute right-[600px] top-[589px]' flipHorizontal/>
            <PipeEdge classNameContainer='absolute right-[838px] top-[664px] -rotate-90'/>
            <PipeEdge classNameContainer='absolute right-[838px] top-[577px] rotate-90'/>
            <Pipe classNameContainer='absolute right-[926px] top-[502px]'/>
            <PipeEdge classNameContainer='absolute right-[1176px] top-[664px] rotate-180'/>
            <PipeEdge classNameContainer='absolute right-[1176px] top-[577px]'/>
            <Pipe classNameContainer='absolute right-[1265px] top-[589px]'/>
            <PipeEdge classNameContainer='absolute right-[1515px] top-[664px] -rotate-90' />
            <Pipe classNameContainer='absolute right-[1440px] top-[414px] -rotate-90'/>

            <Pipe classNameContainer='absolute right-[290px] top-[240px]'/>
            <Pipe classNameContainer='absolute right-[217px] top-[240px] rotate-90 w-[150px] z-5'/>
            <PipeEdge classNameContainer='absolute right-[242px] top-[205px] z-10'/>
            <Pipe classNameContainer='absolute right-[0px] top-[130px]'/>
            <PipeEdge classNameContainer='absolute right-[242px] top-[428px] z-10 -rotate-90'/>
            <Pipe classNameContainer='absolute right-[0px] top-[353px]'/>

            <Pipe classNameContainer='absolute right-[290px] top-[500px]'/>
            <PipeEdge classNameContainer='absolute right-[202px] top-[576px] z-10 rotate-90'/>
            <Pipe classNameContainer='absolute right-[202px] top-[600px] rotate-90 w-[100px] z-5'/>
            <Pipe classNameContainer='absolute right-[120px] top-[645px]'/>
            <PipeEdge classNameContainer='absolute right-[32px] top-[720px] z-10 rotate-90'/>
            <PipeEdge classNameContainer='absolute right-[33px] top-[808px] z-10 -rotate-90'/>

        </div>
    </div>
}
export default Pipes