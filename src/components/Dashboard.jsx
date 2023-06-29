
function Dashboard() {
    return (
        <>
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom">Kudos this week</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col">
                    <h3 className="border-bottom pb-1">Recived kudos</h3>
                    <div className="mt-4">
                    <h4 className="fs-2 text-body-emphasis">Edgar Escobar</h4>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <figcaption className="blockquote-footer">Kudos from <cite title="Source Title">Edgar Escobar</cite></figcaption>
                    <a href="#" className="btn btn-primary">
                        Like
                    </a>
                    </div>
                </div>
                <div className="col">
                <h3 className="border-bottom pb-1">Given kudos</h3>
                    <div className="mt-4">
                    <h3 className="fs-2 text-body-emphasis">Fernanda Vega</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <figcaption className="blockquote-footer">Kudos from <cite title="Source Title">Edgar Escobar</cite></figcaption>
                    <a href="#" className="btn btn-primary">
                    Like
                    </a>
                    </div>
                </div>
                <div className="col">
                <h3 className="border-bottom pb-1">Team kudos</h3>
                    <div className="mt-4">
                    <h3 className="fs-2 text-body-emphasis">Somebody Else</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <figcaption className="blockquote-footer">Kudos from <cite title="Source Title">Edgar Escobar</cite></figcaption>
                    <a href="#" className="btn btn-primary">
                    Like (1)
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;