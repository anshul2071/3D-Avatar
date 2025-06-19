import React from "react";
import {
    Box,
    VStack,
    HStack,
    Button, Switch, Text, useColorMode, IconButton, Wrap, WrapItem,
    Select, FormControl, FormLabel,
    Icon
} from "@chakra-ui/react";

import {HexColorPicker} from "react-colorful";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";
import useAvatarStore, { hairOptions } from "../store/avatarStore";

export default function ControlPanel() {
    const {
        skinColor, hairType, hairColor, outfitType, eyeType, headType, earType, noseType,
        mouthType, lipsType, lipsColor, bodyType, accessories,



        setSkinColor, setHairType, setHairColor, setOutFitType, setEyeType, setHeadType, setEarType, setNoseType,
        setMouthType, setLipsType, setLipsColor, setBodyType,  toggleSunGlasses, toggleNecklace, setShoes, setCap,

        skinColorOptions, hairColorOptions, outfitOptions, eyeOptions, headOptions, earOptions, noseOptions, mouthOptions , lipsOptions,
        lipsColorOptions, bodyOptions,  shoesOptions, capOptions,


        reset, randomize,
        
    
    } = useAvatarStore()



    const {colorMode, toggleColorMode} = useColorMode()



    const SwatchPalette = ({options, current, onSelect}) => (
        <Wrap spacing = '2'>
            {options.map((hex) => (
                <WrapItem key = {hex}>
                    <Box 
                       w = "24px" h = "24px" borderRadius={"md"} 
                       bg = {hex}
                       border={current === hex ? "2px solid ": "1px solid"}
                       borderColor={current ===hex ? "blue.400" : "gray.300"}
                       cursor = "pointer"
                       onClick={() => onSelect(hex)}
                       />
                     
                </WrapItem>
            ))}
        </Wrap>
    )


    return (
        <Box p="4" overflowY={"auto"} h = "100%">
            <VStack spacing = "4" align = "stretch">
                <IconButton 
                   icon = {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                   onClick={toggleColorMode}
                   alignSelf={"flex-end"}
                   />

            <FormControl>
                <FormLabel>Skin Tone </FormLabel>  
                <HexColorPicker color={skinColor} onChange={setSkinColor}/>
                <SwatchPalette 
                    options={skinColorOptions}
                    current={skinColor}
                    onSelect={setSkinColor}
                    />
            </FormControl>

            <FormControl>
                <FormLabel>Hair Style </FormLabel>
                <Select 
                   value = {hairType} onChange= {e => setHairType(e.target.value)}>
                    {hairOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                   </Select>
            </FormControl>

            <FormControl>
                <FormLabel>Hair Color </FormLabel>
                <HexColorPicker color={hairColor} onChange={setHairColor}/>
                <SwatchPalette 
                    options={hairColorOptions}
                    current={hairColor}
                    onSelect={setHairColor}
                    />
            </FormControl>

            <FormControl>
                <FormLabel>Outfit </FormLabel>
                <Select 
                   value = {outfitType} onChange= {e => setOutFitType(e.target.value)}>
                    {outfitOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                   </Select>
            </FormControl>

{[
          { label: 'Eyes',     value: eyeType,   setter: setEyeType,   options: eyeOptions },
          { label: 'Head',     value: headType,  setter: setHeadType,  options: headOptions },
          { label: 'Ears',     value: earType,   setter: setEarType,   options: earOptions },
          { label: 'Nose',     value: noseType,  setter: setNoseType,  options: noseOptions },
          { label: 'Mouth',    value: mouthType, setter: setMouthType, options: mouthOptions },
          { label: 'Lips',     value: lipsType,  setter: setLipsType,  options: lipsOptions },
        ].map(({ label, value, setter, options }) => (
          <FormControl key={label}>
            <FormLabel>{label}</FormLabel>
            <Select value={value} onChange={e => setter(e.target.value)}>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </Select>
            {label === 'Lips' && (
              <>
                <HexColorPicker color={lipsColor} onChange={setLipsColor} />
                <SwatchPalette
                  options={lipsColorOptions}
                  current={lipsColor}
                  onSelect={setLipsColor}
                />
              </>
            )}
          </FormControl>
        ))}


        <FormControl >
                <FormLabel>Body Type </FormLabel>
                <Select 
                   value = {bodyType} onChange= {e => setBodyType(e.target.value)}>
                    {bodyOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                   </Select>
        </FormControl>


        <FormControl as = {HStack}>
            <Switch isChecked = {accessories.sunglasses} onChange = {toggleSunGlasses}/>
            <Text>Sunglasses</Text>
        </FormControl>

        <FormControl as ={HStack}>
            <Switch isChecked = {accessories.necklace} onChange = {toggleNecklace}/>
            <Text>Necklace</Text>
        </FormControl>

        <FormControl>
            <FormLabel>Shoes</FormLabel>
            <Select 
              value = {accessories.shoes}
              onChange = {e=> setShoes(e.target.value)}
              >
                {shoesOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
              </Select>
        </FormControl>


        <FormControl>
            <FormLabel>Cap</FormLabel>
            <Select 
              value = {accessories.cap} onChange= {e => setCap(e.target.value)}>
                    {capOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </Select>
        </FormControl>

        <HStack spacing= '2'>
            <Button colorScheme={'red'} onClick={reset} flex= '1'>Reset</Button>
            <Button colorScheme={'purple'} onClick={randomize} flex= '1'>Randomize</Button>
        </HStack>
   
            </VStack>
        </Box>
    )



}