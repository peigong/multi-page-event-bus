import conf from './conf';
import * as rollup from 'rollup';

let options = {
    input: conf.build.client.src,
    output: {
        format: 'cjs'
    }
};
options.plugins = conf.getPlugins(process.env.NODE_ENV);

function build(){
    return rollup.rollup(options)
	.then(bundle => {
        bundle.write({
            format: 'cjs',
            file: conf.build.client.dest
        });
        return bundle;
	})
	.then(bundle => {
        return bundle.write({
            name: 'MultiPageEventBus',
            format: 'iife',
            file: conf.build.client.iife
        });
	});
};

export default { build };

