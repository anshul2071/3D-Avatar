import create from 'zustand';

export const skinColorOptions = [
  '#ffe0bd', // Fair
  '#ffcd94', // Light
  '#eac086', // Medium
  '#ffad60', // Tan
  '#ffe39f', // Golden
  '#8d5524', // Brown
  '#663300', // Dark Brown
]

export const hairColorOptions = [
  '#000000', // Black
  '#442200', // Dark Brown
  '#7b3f00', // Auburn
  '#c68642', // Light Brown
  '#ffffff', // White
  '#ff0000', // Red
  '#ffd700', // Blonde
]

export const lipsColorOptions = [
  '#d25b7e', // Rose
  '#e75480', // Fuchsia
  '#8b0000', // Maroon
  '#ff1493', // Deep Pink
  '#c71585', // Medium Violet Red
  '#800000', // Burgundy
]

export const hairOptions = [
  'hair1',
  'hair2',
  'hair3',
  'hair4',
  'hair5',
]

export const outfitOptions = [
  'outfit1',
  'outfit2',
  'outfit3',
  'outfit4',
  'outfit5',
]

export const eyeOptions = [
  'eyes1',
  'eyes2',
  'eyes3',
  'eyes4',
  'eyes5',
]

export const headOptions = [
  'head1',
  'head2',
  'head3',
  'head4',
  'head5',
]

export const earOptions = [
  'ear1',
  'ear2',
  'ear3',
  'ear4',
  'ear5',
]

export const noseOptions = [
  'nose1',
  'nose2',
  'nose3',
  'nose4',
  'nose5',
]

export const mouthOptions = [
  'mouth1',
  'mouth2',
  'mouth3',
  'mouth4',
  'mouth5',
]

export const lipsOptions = [
  'lips1',
  'lips2',
  'lips3',
  'lips4',
  'lips5',
]

export const bodyOptions = [
  'body_fat',
  'body_slim',
  'body_ripped',
  'body_muscular',
  'body_average',
]

export const shoesOptions = [
  'shoes1',
  'shoes2',
  'shoes3',
  'shoes4',
  'shoes5',
]

export const capOptions = [
  'cap1',
  'cap2',
  'cap3',
  'cap4',
  'cap5',
]


const defaultState = {

  skinColor: skinColorOptions[0],
  hairType: hairOptions[0],
  hairColor: hairColorOptions[0],
  outfitType: outfitOptions[0],
  eyeType: eyeOptions[0],
  headType: headOptions[0],
  earType: earOptions[0],
  noseType: noseOptions[0],
  mouthType: mouthOptions[0],
  lipsType: lipsOptions[0],
  lipsColor: lipsColorOptions[0],
  bodyType: bodyOptions[1],           
  accessories: {
    sunglasses: false,
    necklace: false,
    shoes: shoesOptions[0],
    cap: capOptions[0],
  },

  
  skinColorOptions,
  hairColorOptions,
  lipsColorOptions,
  hairOptions,
  outfitOptions,
  eyeOptions,
  headOptions,
  earOptions,
  noseOptions,
  mouthOptions,
  lipsOptions,
  bodyOptions,
  shoesOptions,
  capOptions,
}


const loadSaved = () => {
  if (typeof window === 'undefined') return {}
  try {
    const json = localStorage.getItem('avatarConfig')
    return json ? JSON.parse(json) : {}
  } catch {
    return {}
  }
}

const useAvatarStore = create((set) => ({
    ...defaultState,
     ...loadSaved(),




    setSkinColor: (color) => set({skinColor: color}),
    setHairType: (hairType) => set({hairType}),
    setHairColor: (hairColor) => set({hairColor}),
    setOutfitType: (outfitType) => set({outfitType}),
    setEyeType: (eyeType) => set({eyeType}),
    setHeadType: (headType) => set({headType}),
    setEarType: (earType) => ({earType}),
    setNoseType:(noseType) => {(noseType)},
    setMouthType: (mouthType) => set({mouthType}),
    setLipsType: (lipsType) => set({lipsType}),
    setLipsColor: (lipsColor) => set({lipsColor}),
    setBodyType: (bodyType) => set({bodyType}),
    

    toggleSunglasses: () => 
        set((state) => ({
            accessories : {
                ...state.accessories,
                sunglasses: !state.accessories.sunglasses,
            },
        })),
    
    toggleNecklace: () =>
        set((state) => ({
            accessories: {
                ...state.accessories,
                necklace: !state.accessories.necklace
            },
        })),

    setShoes: (shoes) => 
        set((state) => ({
            accessories: {
                ...state.accessories, shoes
            },
        })),

    setCap: (cap) => 
        set((state) => ({
            accessories: {
                ...state.accessories, cap
            },
        })),



    reset: () => 
      {
        set({...defaultState}),
        localStorage.removeItem('avatarConfig')
      },
    


    randomize: () => 
        set({
            skincolor: 
              skinColorOptions[
                Math.floor(Math.random() * skinColorOptions.length)
              ],

            hairType: 
              hairOptions[
                Math.floor(Math.random() * hairOptions.length)

              ],
            
            hairColor:
              hairColorOptions[
                Math.floor(Math.random() * hairColorOptions.length)
              ],
            
            outfitType:
              outfitOptions[
                Math.floor(Math.random() * outfitOptions.length)
              ],
            
            eyeType:
              eyeOptions[
                Math.floor(Math.random() * eyeOptions.length)
              ],
            
            headType:
              headOptions[
                Math.floor(Math.random() * headOptions.length)
              ],
            
            earType:
              earOptions[
                Math.floor(Math.random() * earOptions.length)
              ],
            
            noseType:
              noseOptions[
                Math.floor(Math.random() * noseOptions.length)
              ],

            mouthType:
              mouthOptions[
                Math.floor(Math.random() * mouthOptions.length)
              ],
            
            lipsType:
              lipsOptions[
                Math.floor(Math.random() * lipsOptions.length)
              ],
            
            lipsColor:
              lipsColorOptions[
                Math.floor(Math.random() * lipsColorOptions.length)
              ],
            
            bodyType:
              bodyOptions[
                Math.floor(Math.random() * bodyOptions.length)
              ],

            accessories: {
              sunglasses: Math.random() > 0.5,
              necklace: Math.random() > 0.5,
              shoes: shoesOptions[Math.floor(Math.random() * shoesOptions.length)],
              cap: capOptions[Math.floor(Math.random() * capOptions.length)],
            },
                
        }),


        


}))


useAvatarStore.subscribe((state) => {
  // Only persist the “live” slice, not the option arrays or methods
  const {
    skinColor, hairType, hairColor,
    outfitType, eyeType, headType,
    earType, noseType, mouthType,
    lipsType, lipsColor, bodyType,
    accessories,
  } = state

  const toSave = {
    skinColor, hairType, hairColor,
    outfitType, eyeType, headType,
    earType, noseType, mouthType,
    lipsType, lipsColor, bodyType,
    accessories,
  }

  localStorage.setItem('avatarConfig', JSON.stringify(toSave))
})


export default useAvatarStore