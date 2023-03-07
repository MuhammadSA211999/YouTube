import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import Loading from '../components/ui/Loading'
import { fetchVideo } from "../features/video/videoSlice";
export default function Video() {
    const { videoId } = useParams()
    const dispatch = useDispatch()
    const { isLoading, isError, error, video } = useSelector((state) => state.video)

    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [videoId, dispatch])
    let content = null
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col col-span-12">{error}</div>
    if (!isLoading && !isError && !video?.id) content = <div className="col col-span-12"><h1>Video not found</h1></div>
    if (!isLoading && !isError && video?.id) content = <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
            <VideoPlayer link={video.link} title={video.title} />

            <VideoDescription video={video} />
        </div>

        <RelatedVideoList tags={video.tags} />
    </div>
    return (
        <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    );
}
