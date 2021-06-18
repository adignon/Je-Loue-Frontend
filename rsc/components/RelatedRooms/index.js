import React from 'react';
import {PropertyWidget} from '../'
import {useRelatedRoomsStyle} from "./relatedRooms.style"
import {Carrousel} from '../@utils/'
import {Rooms} from "../../store/@fakedb"

export const  RelatedRoom=()=>{
	const classes=useRelatedRoomsStyle()
	return(
		<Carrousel
			SwiperOptions={{
				slidesPerView: 2
			}}
		>
			{
				Rooms.map((room, i)=>(
					<PropertyWidget room={room} key={i} className={classes.room}/>
				))
			}
		</Carrousel>
	)
}