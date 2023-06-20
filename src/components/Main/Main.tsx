import HomeSection from "@/components/Home-Section/Home-Section";
import CounterSection from "@/components/Counter-Section/CounterSection";
import AboutUsSection from "@/components/About-Us-Section/AboutUsSection";
import IndustriesSection from "@/components/Industries-Section/IndustriesSection";
import OurAchievements from "@/components/Our-Achievements/OurAchievements";
import BrandsSection from "@/components/Brands-Section/BrandsSection";
import OurMission from "@/components/Our-Mission/OurMission";
import QuestionsSection from "@/components/Questions-Section/QuestionsSection";
import ModalForm from "@/components/ModalForm/ModalForm";

export const Main = () => {
    return (
        <>
            <HomeSection/>
            <CounterSection/>
            <AboutUsSection/>
            <IndustriesSection/>
            <OurAchievements/>
            <BrandsSection/>
            <OurMission/>
            <QuestionsSection/>
        </>
    )
}