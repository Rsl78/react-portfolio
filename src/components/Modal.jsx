import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/80 dark:bg-black/80  bg-opacity-400 z-50">
      <div className="relative bg-white dark:bg-[#1d1b19] rounded-lg overflow-hidden w-11/12 max-w-5xl h-[90vh] flex flex-col ">
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 ">
          {/* Header */}
          <div className="flex justify-between items-center p-4">
            <div>
              <p className="py-1 text-sm text-gray-600 dark:text-gray-300">
                Click the button below to close
              </p>
              <h3 className="font-bold text-lg text-gray-800 dark:text-[#dddddd]">
                Bolg begais from here
              </h3>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <IoCloseSharp width={20} height={20} />
            </button>
          </div>
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Modal Visual"
              className="w-full max-h-96 object-cover px-3"
            />
          </div>
          {/* Content */}
          <div className="p-4 flex-1  text-gray-700 dark:text-[#dddddd]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              ipsum veniam omnis, placeat, ipsam aspernatur ex voluptate
              corporis, ratione incidunt aliquam delectus. Nesciunt dolorum
              dolore aperiam voluptate voluptatum, rerum quo sapiente
              repudiandae illo veniam sequi voluptas est blanditiis, quos
              mollitia fugit reprehenderit. Totam cupiditate pariatur, nobis
              facere magnam ut sit impedit similique assumenda ipsum inventore
              aperiam odio repellat rem illo vero incidunt. Dolores voluptas
              reiciendis rerum unde ipsam cupiditate explicabo sapiente quidem,
              quaerat aperiam fuga et. Rerum laborum ex placeat quia?
              Consectetur sint recusandae similique quidem aliquam doloribus
              fuga eligendi praesentium aperiam debitis, voluptatum aliquid,
              tenetur eius pariatur distinctio aspernatur inventore adipisci
              molestiae perferendis corrupti ex rerum? Animi adipisci quos illum
              nemo eum soluta, vitae ullam laudantium placeat nesciunt
              voluptatum, sit dicta! Quis consequuntur exercitationem facilis
              eius temporibus explicabo quaerat vel quia aliquid hic totam,
              corrupti dolorum placeat rerum voluptatum suscipit minima
              laudantium dolores magni id. Laboriosam vel nemo ullam laborum
              quaerat corrupti, amet ipsam autem odio quas eveniet consequuntur
              in atque nam expedita quos necessitatibus rerum cupiditate
              voluptates porro molestias dolore enim. Quo omnis fugiat
              consequuntur animi ut temporibus quisquam voluptatibus, cupiditate
              maxime ex similique officiis quasi nesciunt sed inventore!
              Possimus, nesciunt accusamus delectus quaerat quisquam iure
              dolorem rem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
