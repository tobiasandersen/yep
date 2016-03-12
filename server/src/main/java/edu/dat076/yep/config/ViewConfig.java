package edu.dat076.yep.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.view.script.ScriptTemplateConfigurer;
import org.springframework.web.servlet.view.script.ScriptTemplateViewResolver;

import javax.script.ScriptEngine;

@Configuration
public class ViewConfig {

	/**
	 * Configures the {@link ScriptEngine} that will render our views.
	 */
    @Bean
    public ScriptTemplateConfigurer scriptTemplateConfigurer() {
        ScriptTemplateConfigurer configurer = new ScriptTemplateConfigurer();

        configurer.setEngineName("nashorn");

		/* Initialise the ScriptEngine with these scripts. */
        configurer.setScripts(
            "/static/js/mustache.min.js",
            "/static/js/render.js"
        );

		/* The ScriptEngine will call this function to perform the render */
        configurer.setRenderFunction("render");

		/* We cannot share a ScriptEngine between threads when rendering React applications */
        configurer.setSharedEngine(false);

        return configurer;
    }

	/**
	 * Configures where to find the views that we can render. We actually only have one, "index.ejs".
	 */
    @Bean
    public ViewResolver scriptViewResolver() {
        ScriptTemplateViewResolver viewResolver = new ScriptTemplateViewResolver();
        viewResolver.setPrefix("/templates/");
        viewResolver.setSuffix(".html");
        return viewResolver;
    }

}
