import React, { useEffect, useState } from 'react';
import GalleryModal from './components/GalleryModal';
import Modal from './components/Modal';
import useModal from './hooks/useModal';

const App = () => {


const [isOpenLoginModal,openLoginModal,closeLoginModal]     =useModal();
const [isOpenChatModal,openChatModal,closeChatModal]        =useModal();
const [isOpenGaleryModal,openGaleryModal,closeGaleryModal]  =useModal();














  return (
		<div>
			app component
			<button onClick={openLoginModal}>Open Login Modal</button>
			<button onClick={openChatModal}>Open Chat Modal</button>
			<button onClick={openGaleryModal}>Open Galery Modal</button>
		
    	<Modal
				closeModal={closeLoginModal}
				isOpen={isOpenLoginModal}
				title={"Login"}
			>
				<form>
					<input className='input' type="email" placeholder="email" />
					<input className='input' type="password" placeholder="password" />
				</form>
			</Modal>
			<Modal
				closeModal={closeChatModal}
				isOpen={isOpenChatModal}
				title={"Chat"}
			>
				<p>
					Hola <b>Eze</b>
				</p>
				<p>
					Todo bien ? <b>Pablo</b>
				</p>


			</Modal>
			<GalleryModal 
      isOpen={isOpenGaleryModal} 
      title={"Galery"} 
      closeModal= {closeGaleryModal}

      />
		</div>
  );
};


export default App;