
const Faq = () => {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="text-center pb-14 px-2 border-b-2 border-dashed border-slate-200">
                <div className="pb-8 mb-8 border-b-2 border-dashed border-slate-200">
                    <h1 className="text-xl lg:text-4xl font-extrabold mb-3 lg:mb-6">FAQ</h1>
                    <p className=" lg:w-3/5 mx-auto">Got questions? Our experts are here to tackle them head-on.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 p-8 border-2 border-slate-200 rounded-2xl">
                    <img src="https://i.ibb.co/2qMBDMs/11.png" alt="" />

                    <div className="space-y-2 w-full">
                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-bold">
                            How do I find a study group for my class?
                            </div>
                            <div className="collapse-content">
                                <p>The website will allow you to browse existing groups based on subject, course code, or professor. You can also create your own group and invite classmates through email or social media.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            What features does the website offer for studying?
                            </div>
                            <div className="collapse-content">
                                <p>The website might offer features like a virtual whiteboard, shared document editing, video chat, or a flashcard creator to enhance your group study sessions.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            Is there a way to track progress and stay organized?
                            </div>
                            <div className="collapse-content">
                                <p>The website may offer tools like to-do lists, shared calendars, or progress trackers to help your group stay on top of deadlines and assignments.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            Is the website free to use?
                            </div>
                            <div className="collapse-content">
                                <p>Many group study websites are free to use with basic features.  Some might offer premium memberships with additional features like file storage or private chat rooms.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            How do I ensure a positive and productive group experience?
                            </div>
                            <div className="collapse-content">
                                <p>The website might offer resources or guidelines for creating ground rules and expectations within your study group, promoting effective communication and collaboration.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus text-left border-b-2 border-slate-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            Is the website secure and is my information protected?
                            </div>
                            <div className="collapse-content">
                                <p>The website should have a privacy policy outlining how your data is collected and used. Look for features like secure logins and encrypted communication.</p>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;