export default function FooterContainer (){
    return (
      <div className="FooterContainer">
        <footer class="p-4 rounded-lg shadow md:px-6 md:py-4 mt-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://www.facebook.com/datnguyennnx/" 
                  class="flex items-center mb-4 sm:mb-0 pr-12">
                    <img src="../../public/System.png" class="h-8 mr-3" alt="The System Guys Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
                      The System Guys
                    </span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-lg text-gray-500 lg:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                    
                </ul>
            </div>
            <div class=" flex-col items-center mb-6 text-lg text-gray-500 lg:mb-0 dark:text-gray-400 "> 
              <p class=" flex justify-center">Address: The 1, Vo Van Ngan Street, Thu Duc District, Ho Chi Minh City</p>
              <p class=" flex justify-center">IoT Lab: C302 - Lecture: Trương Quang Phúc</p>  
              <p class=" flex justify-center"> Nguyễn Tiến Đạt - 20119125</p>
              <p class=" flex justify-center"> Chu Đức Tiến - 20119167</p>
            </div>
            <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              ©2023 <a href="https://www.facebook.com/datnguyennnx/" class="hover:underline">
                The System Guys™</a>. All Rights Reserved.
            </span>
        </footer>
      </div>
    )
  } 