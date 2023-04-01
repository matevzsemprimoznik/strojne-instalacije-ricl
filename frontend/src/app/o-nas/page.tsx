import React from "react";

const About = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="p-4">
                <h1>ZEMLJEVID</h1>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl text-custom-blue font-bold mb-4">Ričl d.o.o.</h2>
                        <p>Spodnji Jakobski Dol 45</p>
                        <p>2222 Jakobski dol</p>
                        <p>Slovenija</p>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-wrap">
                        <div className="w-full md:w-1/2 flex items-center justify-end">
                            <div className="bg-custom-light-blue rounded-full w-20 h-20 flex items-center justify-center">
                                <i className="fa fa-icon"></i>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <h3 className="text-lg font-bold mb-4">Telefon</h3>
                            <p>040 532 641</p>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-end">
                            <div className="bg-custom-light-blue rounded-full w-20 h-20 flex items-center justify-center">
                                <i className="fa fa-icon"></i>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <h3 className="text-lg font-bold mb-4">Email</h3>
                            <p>ricl@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col px-4 pb-5">
                <h1 className='font-bold text-4xl mb-8'>Naše <span className='text-custom-blue'>poslanstvo</span></h1>
                <p className="text-lg mb-4">
                    Podjetje, ki se ukvarja s strojnimi inštalacijami, je družinsko podjetje, ki ga sestavljata oče in sin. S svojim znanjem in izkušnjami na področju strojnih inštalacij, kot so ogrevanje, vodovod in klimatizacija, sta že vrsto let zadovoljna svoja stranke.

                </p>
                <p className="text-lg">
                    Njihovo poslanstvo je zagotoviti kakovostne in učinkovite rešitve za svoje stranke, ki jim bodo zagotovile ugodno bivanjsko okolje in prihranek pri stroških. S strankami komunicirata odkrito in jih vedno poslušata ter svetujeta, da lahko skupaj najdejo najboljšo rešitev za njihove potrebe.

                </p>
            </div>
        </div>
    )
}

export default About;