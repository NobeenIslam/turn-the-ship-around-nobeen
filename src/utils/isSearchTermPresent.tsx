import {IEpisode} from "../components/IEpisode"

function isSearchTermPresent(singleEpisode:IEpisode, searchTerm: string):boolean{
    const fullDetail = singleEpisode.name + singleEpisode.summary
    return fullDetail.includes(searchTerm)
}

export default isSearchTermPresent


