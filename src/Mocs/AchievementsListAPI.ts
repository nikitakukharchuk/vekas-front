import {AchievementsItemType} from "@/types/AchievementsItemType";

export const AchievementsListAPI: AchievementsItemType[] = [
    {
        id: 1,
        imageSrc: '/achievements/land.png',
        title: 'Manufacturers',
        description: 'Manufacturers are concerned about the well-being of their customers. VEKAS helps manufacturers with:',
        list: ['Fight against counterfeit','Increasing consumer trust in their brands','Full traceability of products at all points of the logistics chain','Simplification of the recalling products procedure']
    },
    {
        id: 2,
        imageSrc: '/achievements/group.png',
        title: 'Distributors',
        description: 'Distributors’ main goal is stock level optimization. VEKAS helps distributors with:',
        list: ['Speeding up the products receiving process','Monitoring expiration dates','Integrating manufactures into complex logistics and distribution networks']
    },
    {
        id: 3,
        imageSrc: '/achievements/man.png',
        title: 'Customers',
        description: 'Every consumer wants to be confident in the quality of the products they buy. VEKAS helps customers with:',
        list: ['Product authentication','Obtaining the necessary product information']
    },
    {
        id: 4,
        imageSrc: '/achievements/flag.png',
        title: 'Government',
        description: 'Government wishes to maintain control over tax collecting and keep the countrys inhabitants safe. VEKAS helps government with:',
        list: ['Full payment of taxes','Lowering the level of counterfeiting']
    }
]