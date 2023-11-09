using FluentValidation;
using MediatR;
using ValidationException = FluentValidation.ValidationException;

namespace API.Core.Validation;

public class ValidationPipelineBehaviour<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : IRequest<TResponse>
{
    private readonly IValidator<TRequest>? _validator;

    public ValidationPipelineBehaviour(IValidator<TRequest>? validator)
    {
        _validator = validator;
    }
    
    
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {

        // If no validator is present for the current request.
        if (_validator is null)
        {
            return await next();
        }
        var validationResult = await _validator.ValidateAsync(request, cancellationToken);

        if (validationResult is not null && validationResult.IsValid is not true)
        {
            throw new ValidationException(validationResult.Errors);
        }

        return await next();
    }
}