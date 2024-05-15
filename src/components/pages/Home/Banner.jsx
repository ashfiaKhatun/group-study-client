
const Banner = () => {
    return (
        <div>
            <div className="hero bg-cover bg-no-repeat my-8" style={{ backgroundImage: 'url(https://i.ibb.co/Xsd5ftK/photo-1522202176988-66273c2fd55f.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-36">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Connect Students</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;