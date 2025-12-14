import Link from "next/link";
import "./not-found.css";
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>
              <Image src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" width={100} height={200} alt="404 page" />
              <div class="contant_box_404">
                <h3 class="h2">Look like you&apos;re lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link href="/" class="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
