import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import makeStore from '../store';

class ExtendedApp extends App {
    static getInitialProps = async ({ Component, ctx }) => ({
        pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    })
    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(ExtendedApp);