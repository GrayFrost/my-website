import Image from 'next/image';
import me from '../../../public/me.svg';

export default function Teacher() {
  return (
    <div>
      关于我
      <Image src={me} alt="me logo"/>
    </div>
  );
}