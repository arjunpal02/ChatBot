function getBotResponse(input) {
    //rock paper scissors
    if (input == "what is biogas") {
        return "It is a process of Biological decomposition of organic materials like cowdung, poultry droppings etc. in the absence of oxygen. It is also called as anaerobic digestion.";
    } else if (input == "what is comosition of biogas") {
        return "Methane (CH4) 55-60%, Carbon dioxide (CO2) 35-40%, Trace elements of Ammonia Hydrogen Sulphide (H2S) and moisture.";
    } else if (input == "What is the calorific value of biogas") {
        return "4500-5000 K.Cal/m3";
    }else if (input == "what are the uses of biogas") {
        return "Biogas Can be used for cooking, Lighting and running of engines";
    }else if (input == "what is the equvalent value of 1m3 as compared to lpg") {
        return "0.42 kg of LPG";
    }else if (input == "what are the merits of biogas") {
        return "If helps in rural sanitation, eliminate drudgery of women, reducing, deforestation, provides good quality organic manure and providing convenient safe and aesthetic waste disposal method";
    }else if (input == "biogas plant can be connected to latrine") {
        return "Yes, gives more methane";
    }else if (input == "what is the optimum ph for biogas production") {
        return "6.5 to 7.5 pm";
    }else if (input == "what is the optimum solid concentration for biogas production") {
        return "10-12%";
    }else if (input == "what is the optimum C:N for biogas production") {
        return "30:1";
    }else if (input == "what is the optimum temprature for biogas production") {
    return "35-40'0C";
}else if (input == "biogas produced m3 per kg of cowdung is") {
    return "0.04m'3";
}else if (input == "biogas produced m3 per kg of poultry dropping") {
    return "0.07m";
}else if (input == "biogas produced m3 per kg od horse dung") {
return "0.04m";
}else if (input == "biogas produced m3 per kg of sheap/goat") {
return "0.06m'3";
}else if (input == "biogas produced m3 per kg of piggery") {
    return "0.07m";
}else if (input == "biogas produced m3 per kg of human excreta") {
    return "0.08m";
}else if (input == "what is the hydraulic retenation time for tropical region is") {
return "30 days";
}else if (input == "what is the hydraulic retenation time for sub tropical region") {
return "40days";
}else if (input == "what type of wastes produces biogas") {
    return "Any organic waste has the potential to produce biogas: human excreta, manure, animal slurry, fruit and vegetable waste, slaughterhouse waste, meat packing waste, dairy waste, brewery and distillery waste.";
}else if (input == "can biogas be used in place of fossil fuels? how") {
return "Methane is the principal gas in biogas. Methane is also the main component in natural gas, a fossil fuel. Biogas can be used to replace natural gas in many applications including: cooking, heating, steam and power generation, vehicular fuel, and as a pipeline gas.";
}else if (input == "what is the environmental impacts of producing/using biogas") {
return "Biogas production can reduce the pollution potential in wastewater by converting oxygen demanding organic matter that could cause low oxygen levels in surface waters. Nutrients, like nitrogen and phosphorous are conserved in biogas effluents and can be used to displace chemical fertilizers in crop production.";
}else if (input == "does biogas contribute to climate change") {
    return "While combustion of biogas, like natural gas, produces carbon dioxide (CO2), a greenhouse gas, the carbon in biogas comes from plant matter that fixed this carbon from atmospheric CO2. Thus, biogas production is carbon-neutral and does not add to greenhouse gas emissions. Further, any consumption of fossil fuels replaced by biogas will lower CO2 emissions.";
}else if (input == "how much energy is contained in biogas") {
return "One m2 of biogas contains an equivalent of 6 kWh of thermal energy. However, when converting biogas into electrical power, about 2 kWh of electricity is generated, the rest is converted into heat energy. Eg. 2 kWh is enough to power 100 watts of lamp for 20 hours.";
}else if (input == "what does the capacity of biogas plant mean") {
return "The capacity of the biogas plant indicates how much biogas the plant produces in one day. For eg. 1 m3 biogas plant produces 1000 litres or 1 m3 (1 m3 = 1000 litres) of biogas in one day.";
}else if (input == "is it possible for an ordinery mason to construct these biogas plants") {
return "No. Only trained masons can construct these biogas plants, as it requires more skill to complete the construction without any cracks.";
}else if (input == "what are the responsibilities the a beneficiary should take to build good biogas plant") {
return "The necessary documents and complete information about the operation of the plant should be obtained from the construction agency, for subsidy of the construction work, the information about the initial filling of the plant, the availability of the operating material and any other related information. The phone number of the concerned department / agency employee should be obtained and noted.";
}

      // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}