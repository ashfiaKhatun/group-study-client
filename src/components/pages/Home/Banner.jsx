
const Banner = () => {
    return (
        <div>
            <div className="hero bg-cover bg-no-repeat my-8" style={{ backgroundImage: 'url(https://i.ibb.co/Xsd5ftK/photo-1522202176988-66273c2fd55f.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content py-36">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Connect Students</h1>
                        <p className="mb-5">Struggling to go it alone? Connect Students helps you find or form a study group to crush your classes and make friends along the way. Sign up and start connecting today!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;