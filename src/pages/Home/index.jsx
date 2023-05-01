import Card from '../../components/Card'
import './index.css'
import { useState } from 'react'

const Home = ({ data, isLoading, error }) => {
    const [loadMore, setLoadmore] = useState(12)
    const handleLoadMore = () => {
        setLoadmore(prev => prev + 12)
    }

    return (
        <>
            {error ? (
                <p>erreur</p>
            ) : isLoading ? (
                <p>Loading</p>
            ) : (
                <section className='jobsection'>
                    {data.reverse().slice(0, loadMore).map((elt) => (
                        <Card data={elt} />

                    ))}
                    <div className='btn'>
                        <button className="btn-loadmore" onClick={() => handleLoadMore()}>Load more</button>
                    </div>
                </section>

            )}
        </>

    );
}

export default Home;