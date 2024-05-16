
const Faq = () => {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="text-center pb-14 px-2 border-b-2 border-dashed border-slate-200">
                <div className="pb-8 mb-8 border-b-2 border-dashed border-slate-200">
                    <h1 className="text-xl lg:text-4xl font-extrabold mb-3 lg:mb-6">Clients Question</h1>
                    <p className="text-common-color-ash lg:w-3/5 mx-auto">Got questions? Our sports experts are here to tackle them head-on. Your game, our answers – seamless support awaits!</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 p-8 border-2 border-slate-200 rounded-2xl">
                    <img src="https://i.ibb.co/2qMBDMs/11.png" alt="" />

                    <div className="space-y-2">
                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-bold">
                                Our Equipment
                            </div>
                            <div className="collapse-content">
                                <p className="text-common-color-ash">Elevate your performance with top-notch sports equipment, engineered for excellence and designed for victory.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Hockey Training
                            </div>
                            <div className="collapse-content">
                                <p className="text-common-color-ash">Transform your skills on the ice with our dynamic hockey training programs – where champions are forged.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Private Lessons
                            </div>
                            <div className="collapse-content">
                                <p className="text-common-color-ash">Unlock your full potential with personalized private lessons – tailored expertise to propel your success in sports.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Ski Touring
                            </div>
                            <div className="collapse-content">
                                <p className="text-common-color-ash">Embark on thrilling adventures and conquer snowy peaks with the exhilarating freedom of ski touring.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Booking
                            </div>
                            <div className="collapse-content">
                                <p className="text-common-color-ash">Score your spot in the game effortlessly with seamless sports booking – where passion meets convenience.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Pricings
                            </div>
                            <div className="collapse-content">
                                <p className="text-common-color-ash">Competitive pricing that makes victory accessible to all, ensuring every player can afford the thrill of sports.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;