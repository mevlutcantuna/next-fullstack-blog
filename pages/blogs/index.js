import { Layout, MainPostCard } from "../../components"

const Blogs = () => {
    return <Layout>
        <div className="blogs">
            <div className="blogs__container">
                <MainPostCard/>
                <MainPostCard/>
                
            </div>
        </div>
    </Layout>
}

export default Blogs;