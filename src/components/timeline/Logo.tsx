import Image from 'next/image';

const Logo = ({ logo, company }: { logo: string, company: string }) => (
    <div className="relative w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
        <div className="glass rounded-xl p-2 w-full h-full">
            <div className="relative w-full h-full">
                <Image
                    src={logo}
                    alt={`${company} logo`}
                    fill
                    className="w-full h-full object-contain m-0"
                    loading="lazy"
                />
            </div>
        </div>
    </div>
);

Logo.displayName = 'Logo';
export default Logo;